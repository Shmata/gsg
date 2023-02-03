import { ITicket } from "./ITicket";



//export const filterCities = (tickets: ITicket[]): string[] =>{
export const filterCities = () =>{    
    
    const trips: ITicket[] = [
        {
            "source": "Amsterdam",
            "destination": "Berlin"
        },
        {
            "source": "Paris",
            "destination": "London"
        },
        {
            "source": "London",
            "destination": "Amsterdam"
        }
    ];
    const begins:string[] = [];
    const ends:string[] = [];

    // break json file into two simple arrays, in order to compare them.
    trips.map((ticket)=>{
      begins.push(ticket.source);
      ends.push(ticket.destination);
    });
    
    // find intersection places where not begin and finish points
    const intersection = begins.filter(element => ends.includes(element));

    // find the begin point of journey
    const getBeginPoint = (startPoints:string[]):string =>{
        const beginPoint = startPoints.filter(element => !intersection.includes(element));
        return beginPoint[0];
    }
    //console.log(getBeginPoint(begins));

    // find the final point of journey. MAYBE we need it in future
    // const getFinishPoint = (endPoints:string[]):string =>{
    //     const finalDestination = endPoints.filter(elem => !intersection.includes(elem));
    //     return finalDestination[0];
    // }

    const findJourney = (begins:string): string =>{
        let way:string[] = [];
        way.push(begins);

        let current = begins;
        for(let i = 0 ; i < trips.length ; i++){
          for( let trip of trips){
            if( trip.source === current ){
              way.push(trip.destination);
              current = trip.destination;
            }
          }
        }
        // const finishedPoint = getFinishPoint(ends);
        return way.join(', ');
    }
    console.log(`result: '${findJourney(getBeginPoint(begins))}'`);
}
console.log(filterCities())
