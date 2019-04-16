import React from "react";
import { Button } from "semantic-ui-react";
import { API } from '../data'

class MakeCarButton extends React.Component {
    //   create_table "cars", force: :cascade do |t|
    // t.bigint "user_id"
    // t.string "name"
    // t.string "up"
    // t.string "down"
    // t.string "left"
    // t.string "right"
    // t.integer "max_fuel"
    // t.integer "tread_wear"
    // t.integer "health"
    // t.datetime "created_at", null: false
    // t.datetime "updated_at", null: false
    // t.index ["user_id"], name: "index_cars_on_user_id"

    createCar = () => {
        const carObj = {
            
        }

        fetch(`${API}/cars`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(carObj)
        })
    }
    
    render () {
        const { car } = this.props

        return (
          <div>
            {car ? (
              <Button onClick={this.createCar}>Create Car</Button>
            ) : (
              <Button disabled>Create Car</Button>
            )}
          </div>
        );
    }
}

export default MakeCarButton;
