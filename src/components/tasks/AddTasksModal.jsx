import { useForm } from "react-hook-form";
import Modal from "../ui/Modal";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/tasks/tasksSlice";


const AddTasksModal = ({isOpen, setIsOpen}) => {
const dispatch = useDispatch();
    const {register,handleSubmit, reset } =useForm();
    const onCancel =() =>{
        reset();
        setIsOpen(false);
    }

    const onSubmit = (data) =>{
        console.log(data)
        dispatch(addTask(data))
        onCancel();
            }
    return (
        <div>
          <Modal 
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            title="Add MY Task" 
             >
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                    <label htmlFor="title">Title</label>
<input className="w-full rounded-md" id="title" type="text" {...register('title')}/>
                    </div>
                    <div>
                    <label htmlFor="description">Description</label>
<input className="w-full rounded-md" id="description" type="text" {...register('description')}/>
                    </div>
                    <div>
                    <label htmlFor="date">Date</label>
<input className="w-full rounded-md" id="date" type="date" {...register('date')}/>
                    </div>

                    <div>
                    <label htmlFor="assignedTo">Assign To</label> <br />

                    <select {...register("assignedTo")} className="w-full rounded-md">
        <option value="shamim">Shamim</option>
        <option value="raju">Raju</option>
        <option value="hasan">Hasan</option>
        <option value="Tarik">Tarik</option>
      </select>
                    </div>

                    <div>
                    <label htmlFor="priority">Priority</label> <br />

                    <select {...register("priority")} className="w-full rounded-md">
        <option value="low">low</option>
        <option value="medium">medium</option>
        <option value="high">high</option>
      </select>
                    </div>
<div className="flex gap-3 justify-end mt-4">
<button onClick={() =>onCancel()} type="button" className="btn btn-danger"> Cancel</button>
<button  className="btn btn-primary" type="submit"> Submit</button>
</div>
                </form>
             </Modal>  
        </div>
    );
};

export default AddTasksModal;