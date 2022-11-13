import React from 'react';
import { format } from 'date-fns';

const BookingModal = ({ treatment, selectDate }) => {
    const { name, slots } = treatment;
    const date = format(selectDate, "PP")
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg text-secondary font-bold mb-10">{name}</h3>
                    <form className='grid grid-cols-1 gap-5'>

                        <input type="text" readOnly value={date} className="input input-bordered w-full" />
                        <select className="select select-bordered w-full">
                            {
                                slots.map(slot => <option>{slot}</option>)
                            }
                        </select>
                        <input type="text" placeholder="Full Name" className="input input-bordered w-full" />
                        <input type="text" placeholder="Phone Number" className="input input-bordered w-full" />
                        <input type="email" placeholder="Email" className="input input-bordered w-full" />
                        <input type="submit" className="btn btn-accent w-full" value="Submit" />

                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;