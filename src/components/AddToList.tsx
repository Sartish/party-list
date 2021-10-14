import React, {useState} from "react"
import { IState as Props } from "../App"

interface IProps {
    people: Props["people"]
    setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>
}
const AddToList: React.FC<IProps> = ({people, setPeople}) => {

    const [input, setInput] = useState({
        name: "",
        age:"",
        notes: "",
        img: ""
    })
    
    // if input is empty 
    const handleClick = (): void => {
        if(
            !input.name ||
            !input.age ||
            !input.img
        ) {
            return
        }
        setPeople([
            ...people,
            {
                name: input.name,
                age: parseInt(input.age),
                url: input.img,
                note: input.notes
            }
        ])
        setInput({
        name: "",
        age:"",
        notes: "",
        img: ""
        })
    }


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        //input to what ever the input area currently is
        //we want to change input element to what ever the value is
        // and overage whatever the "name" is to what the value will be
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }
 
    return(
    <div className="AddToList">
        <input type="text"
        placeholder="name"
        className="AddToList-input"
        value={input.name}
        // adding a on change event
        // adding name to see the responsibility of the onChange event 
        onChange={handleChange}
        name="name"
        />
        <input type="text"
        placeholder="age"
        className="AddToList-input"
        value={input.age}
        onChange={handleChange}
        name="age"
        />
        <input type="text"
        placeholder="imageUrl"
        className="AddToList-input"
        value={input.img}
        onChange={handleChange}
        name="img"
        />
        <textarea 
        placeholder="notes"
        className="AddToList-input"
        value={input.notes}
        onChange={handleChange}
        name="notes"
        />
        <button className="AddToList-btn"
        onClick={handleClick}>
            Add to list
        </button>
    </div>)
}

export default AddToList