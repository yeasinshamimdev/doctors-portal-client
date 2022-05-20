import React from 'react';
import { toast } from 'react-toastify';

const DoctorRow = ({ doctor, index, setDeletingDoctor }) => {
    const { name, email, img, specialty } = doctor;

    return (
        <tr>
            <th>{index + 1}</th>
            <td>
                <div class="avatar">
                    <div class="w-12 rounded-full">
                        <img src={img} alt='' />
                    </div>
                </div>
            </td>
            <td>{name}</td>
            <td>{specialty}</td>
            <td>
                <label onClick={() => setDeletingDoctor(doctor)} htmlFor="delete-confirm-modal" className="btn btn-xs btn-error text-white">delete</label>
            </td>
        </tr>
    );
};

export default DoctorRow;