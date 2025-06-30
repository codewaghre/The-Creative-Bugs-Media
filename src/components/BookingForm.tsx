import { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { DayPicker } from 'react-day-picker'
import { format } from "date-fns";
import { addMonths, isToday } from 'date-fns';
import { useCreateBooking } from "../api/useCreateBooking";
import { bookingSchema } from "../lib/validators";
import { motion } from "motion/react"
import "react-day-picker/style.css";



// Define the types for FormData and BookingFormProps
type FormData = {
    name: string;
    email: string;
    date: string;
    time: string;
    additionalInfo?: string;
};

interface BookingFormProps {
    event: {
        id: string;
        username: string;
        duration: number;
    };
    availability: { date: string; slots: string[] }[];
}

export const BookingForm: React.FC<BookingFormProps> = ({ event, availability }) => {


    // Define state types correctly for date and time
    const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined); // Changed from null to undefined
    const [selectedTime, setSelectedTime] = useState<string | null>(null);

    // Set up react-hook-form with FormData type
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
    } = useForm<FormData>({
        resolver: zodResolver(bookingSchema),
    });

    // Handle date changes and set the value for 'date' in form
    useEffect(() => {
        if (selectedDate) {
            setValue("date", format(selectedDate, "yyyy-MM-dd"));
        }
    }, [selectedDate, setValue]);

    // Handle time changes and set the value for 'time' in form
    useEffect(() => {
        if (selectedTime) {
            setValue("time", selectedTime);
        }
    }, [selectedTime, setValue]);

    // Create booking mutation hook
    const { mutateAsync: createBooking, status, data } = useCreateBooking();
    const isCreatingBooking = status === "pending";




    // Form submission handler
    const onSubmit: SubmitHandler<FormData> = async (formData) => {
        if (!selectedDate || !selectedTime || !event?.duration || !event?.id) {
            console.error("Missing required fields: Date, Time, or Event");
            return;
        }

        const startTime = new Date(
            `${format(selectedDate, "yyyy-MM-dd")}T${selectedTime}`
        );
        const endTime = new Date(startTime.getTime() + event.duration * 60000);

        try {
            const response = await createBooking({
                username: event.username,
                eventId: event.id,
                bookingDetails: {
                    eventId: event.id,
                    name: formData.name,
                    email: formData.email,
                    startTime: startTime.toISOString(),
                    endTime: endTime.toISOString(),
                    additionalInfo: formData.additionalInfo,
                },
            });

            console.log("Booking successful:", response);
        } catch (err) {
            console.error("Booking failed:", err);
        }
    };

    // Available days for selection (mapped from availability prop)
    const availableDays = availability.map((day) => new Date(day.date));

    // Determine time slots based on selected date
    const timeSlots = selectedDate
        ? availability.find(
            (day) => day.date === format(selectedDate, "yyyy-MM-dd")
        )?.slots || []
        : [];

    // If booking data is returned, display success message
    if (data) {
        return (
            <div className="booking-success-box">
                <h2>Booking successful!</h2>
                {data.meetLink && (
                    <p>
                        Join the meeting:{" "}
                        <a
                            href={data.meetLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="meeting-link"
                        >
                            {data.meetLink}
                        </a>
                    </p>
                )}
            </div>
        );
    }

    // Main form UI
    return (

        <motion.div
            initial={{ opacity: 0, y: 2, filter: 'blur(4px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false, amount: 0.2 }}
            className="booking-container">
            <div className="calendar-time-wrapper">
                <div className="calendar-box">
                    <DayPicker
                        className="calender"
                        mode="single"
                        selected={selectedDate}
                        onSelect={(date) => {
                            setSelectedDate(date);
                            setSelectedTime(null);
                        }}
                        fromMonth={new Date()}
                        toMonth={addMonths(new Date(), 2)}

                        disabled={[
                            { before: new Date() }, // disables past dates
                            (date) => date.getDay() === 0 || date.getDay() === 6, // disables weekends
                        ]}

                        modifiers={{
                            available: availableDays,
                            today: (date) => isToday(date),
                        }}

                        modifiersStyles={{
                            available: {
                                border: '1px solid var(--border-color)',
                                borderRadius: 100,
                                cursor: 'pointer',
                            },
                            today: {
                                fontWeight: 'bold',
                                color: 'var(--bg-green)',
                            },
                        }}

                        classNames={{
                            nav_button: 'text-red-500 hover:text-red-700',
                            nav_icon: 'fill-red-500 hover:fill-red-700',
                        }}
                    />
                </div>

                <div className="time-slot-box">
                    {selectedDate && (
                        <div>
                            <h3>Available Time Slots</h3>
                            <div className="slot-grid">
                                {timeSlots.map((slot) => (
                                    <button
                                        key={slot}
                                        className={`slot-button ${selectedTime === slot ? "selected" : ""}`}
                                        onClick={() => setSelectedTime(slot)}
                                    >
                                        {slot}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {selectedTime && (
                <form onSubmit={handleSubmit(onSubmit)} className="booking-form">
                    <div>
                        <input {...register("name")} placeholder="Your Name" />
                        {errors.name && <p className="error-msg">{errors.name.message}</p>}
                    </div>
                    <div>
                        <input {...register("email")} type="email" placeholder="Your Email" />
                        {errors.email && <p className="error-msg">{errors.email.message}</p>}
                    </div>
                    <div>
                        <textarea {...register("additionalInfo")} placeholder="What should we know before getting on the call" />
                    </div>
                    <button type="submit" disabled={isCreatingBooking} className="submit-btn">
                        {isCreatingBooking ? "Scheduling..." : "Schedule Meeting"}
                    </button>
                </form>
            )}
        </motion.div>

    );
}
