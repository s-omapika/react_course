import { useState, useEffect} from "react";
import Meetuplist from "../components/meetups/Meetuplist";



    function ALLMeetupsPage (){
      const [isLoading, setIsLoading ]=  useState(true);
      const[loadedMeetups, setLoadedMeetups] = useState([]);

      useEffect( () => {
        setIsLoading(true);
        fetch( 'https://react-course-a40d9-default-rtdb.firebaseio.com/meetups.json'
    
        ).then(response => {
           return response.json();
        }).then(data => {
             const meetups =[];
             for(const key in data) {
                 const meetup = {
                     id : key,
                     ...data[key]
                 };
              meetups.push(meetup);

             }

            setIsLoading(false);
            setLoadedMeetups(meetups);
        });

      }, []);

 

    if (isLoading) {
        return (
            <section>
                <p>Loading...</p>
            </section>
        );
    }
    return (
        <section>
            <h1>All Meetups </h1>
           <Meetuplist meetups={loadedMeetups} />
        </section>
    );
}

export default ALLMeetupsPage ;