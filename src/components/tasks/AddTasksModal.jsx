import Modal from "../ui/Modal";


const AddTasksModal = ({isOpen, setIsOpen}) => {
    return (
        <div>
          <Modal 
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            title="Add MY Task" 
             >
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ad placeat quaerat laborum aspernatur officiis culpa voluptatem, dolor eligendi dolores.</p>
             </Modal>  
        </div>
    );
};

export default AddTasksModal;