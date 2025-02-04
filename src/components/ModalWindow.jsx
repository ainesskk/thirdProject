import "./../styles/ModalWindow.css";
import PropTypes from "prop-types";

const ModalWindow = ({ deleteCallback, closeWindowCallback }) => {

    return (
        <>
            <div className="modal-window-container">
                <h2 className="mb-6">Do you want to delete a city?</h2>
                <div className="btn-container">
                    <button className="modal-reject-btn body-text2" onClick={closeWindowCallback}>No</button>
                    <button className="modal-confirm-btn body-text2" onClick={deleteCallback}>Yes</button>
                </div>
            </div>
        </>
    );
};

export default ModalWindow;

ModalWindow.propTypes = {
    deleteCallback: PropTypes.func.isRequired,
    closeWindowCallback: PropTypes.func.isRequired,
}