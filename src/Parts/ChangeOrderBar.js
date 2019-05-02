import React from 'react'
import Button from '@material-ui/core/Button';

const ChangeOrderBar = (props) => {
    return (
        <div>
            <Button
                size="medium"
                variant="outlined" 
                onClick={props.changeOrder}
                style={{ margin: 5 }}
                color="primary"
            >
                Ascending Price
            </Button>

            <Button
                size="medium"
                variant="outlined" 
                onClick={props.changeOrder}
                color="primary"
            >
                Descending Price
            </Button>

        </div>
    )
}


export default ChangeOrderBar