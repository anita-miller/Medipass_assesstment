import React from 'react'
import Button from '@material-ui/core/Button'

const Pager = (props) => {
    return(
        <div>
            {props.pageOffset === 1 ? null : (
            <Button 
              size="medium" 
              onClick ={props.prevPage}
              color= "primary"
              variant="contained"
            >
              Previous
            </Button>
            )}
            {props.currentPageLength < 5 ? null : (
            <Button 
              size="medium" 
              onClick ={props.nextPage}
              color= "secondary"
              variant="contained"
            >
        Next
            </Button>
            )}

        </div>
    )
}

export default Pager