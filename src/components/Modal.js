import React from 'react'
import { useDispatch } from 'react-redux'
import { closeModal } from '../features/modal/modalSlice'
import { clearItems } from '../features/cartSlice'

const Modal = () => {
    const dispatch = useDispatch();
    return (
        <aside className='modal-container'>
            <div className="modal">
                <h4>remove all items from your shoping cart?</h4>

                <div className="btn-container">
                    <button type='button' className='btn confirm-btn' onClick={()=>{
                        dispatch(clearItems());
                        dispatch(closeModal());
                    }}>confirm</button>
                    <button type='button' className='btn clear-btn' onClick={()=>{
                        dispatch(closeModal())
                    }}>cancel</button>
                </div>
            </div>
        </aside>
    )
}

export default Modal