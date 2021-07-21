
import { useHistory } from 'react-router-dom';
import NewMeetupForm from "../components/meetups/NewMeetupFrom";

function NewMeetup (){
    const history = useHistory();
    function addMeetupHandler(meetupData) {
        fetch('https://react-course-a40d9-default-rtdb.firebaseio.com/meetups.json',
           {
               method: 'POST',
               body: JSON.stringify(meetupData),
               headers: {
                   'Content-Type':'application/json'
               },

           }
        
        
        ).then(() => {
            history.replace('/');
        });
    }
    return (
        <section>
            <h1>Add New Meetup</h1>
            <NewMeetupForm  onAddMeetup={addMeetupHandler}/>
        </section>
    );
}

export default NewMeetup ;