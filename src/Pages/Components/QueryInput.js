
import React, { useRef, useState } from "react";
import {
    FilterGroupItem,
    Input,
    Icon,
    Select,
    Option,
    DatePicker,

} from "@ui5/webcomponents-react";
import { ValueHelperDialog } from './ValueHelper'

export const QueryInput = (props) => {
    // console.log("openValueHelper", props)
    // const dialogRef = useRef(null);
    // const handleOpen = () => {
    //   dialogRef.current.open();
    // };
    const [FieldMetaData, setFieldsMetaData] = useState(props.FieldMetaData) 

    // const handleOpenValueHelper=(e) => {
    //     openDialog.current.open()
    // }



    

    return (
        <>
            {(() => {
                        if (FieldMetaData.fieldType == 'inputbox') {
                            return (
                                <Input icon={<Icon name="value-help" onClick={props.openValueHelper} />} placeholder="">
                                    
                                </Input>
                            
                            )
                        }else if (FieldMetaData.fieldType == 'dropdown') {
                            return (
                                    <Select >
                                        <Option></Option>
                                    </Select>                            
                            )
                        } else if (FieldMetaData.fieldType == 'datepicker') {
                            return (
                                <DatePicker></DatePicker>
                            
                            )
                        } 
                    })
                    
                ()
                
            }
      
        
        </>
        

            

        
    )
};