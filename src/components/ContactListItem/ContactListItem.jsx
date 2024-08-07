import css from './ContactListItem.module.css'
import PropTypes from 'prop-types'

function ContactListItem ({filteredContact, deleteInfo}) {

    // componentWillUnmount() {
    //     console.log("data deleted")
    // }

    // const {filteredContact, deleteInfo} = this.props
    
    return (
        <li className={css.contactList}>
            {filteredContact.name}: {filteredContact.number}
            <button className={css.listButton} onClick={() => {deleteInfo(filteredContact.id)}}> Delete</button>
        </li>
    )
}

export default ContactListItem

ContactListItem.propTypes = {
    deleteInfo: PropTypes.func.isRequired,
    filteredContact: PropTypes.shape({
        // id: PropTypes.string.isRequired, 
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    }).isRequired
        
}