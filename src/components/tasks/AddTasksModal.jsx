import { useForm } from "react-hook-form";
import Modal from "../ui/Modal";


const AddTasksModal = ({isOpen, setIsOpen}) => {

    const {register,handleSubmit, reset } =useForm();
    const onCancel =() =>{
        reset();
        setIsOpen(false);
    }

    const onSubmit = (data) =>{
        console.log(data);
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
<input className="w-full rounded-md" id="title" type="text" {...register('name')}/>
                    </div>
                    <div>
                    <label htmlFor="title">Description</label>
<input className="w-full rounded-md" id="description" type="text" {...register('description')}/>
                    </div>
                    <div>
                    <label htmlFor="title">Date</label>
<input className="w-full rounded-md" id="date" type="date" {...register('date')}/>
                    </div>

                    <div>
                    <label htmlFor="assign">Assign To</label> <br />

                    <select {...register("assign")} className="w-full rounded-md">
        <option value="Shamim">Shamim</option>
        <option value="m">male</option>
        <option value="other">other</option>
      </select>
                    </div>
<div className="flex gap-3 justify-end">
<button onClick={() =>onCancel()} type="button" className="btn btn-danger"> Cancel</button>
<button type="submit"> Submit</button>
</div>
                </form>
             </Modal>  
        </div>
    );
};

export default AddTasksModal;