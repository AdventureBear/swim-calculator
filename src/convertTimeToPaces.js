/**
 * Created by suzanne on 1/25/17.
 */
//takes T1, D1, m (decay function) and D2 array
// and outputs paces for each distance
//Time for any Distance 	 t2 = b * d2 ^ decay
//b = T1 / D1 ^ decay

export default function convertTimeToPaces(t1, d1, decay, d2Arr) {
  const b = t1 / (d1 ** decay)
  return  d2Arr.map((distance) =>{
    return {"distance": distance, "duration" : b * (distance ** decay)}
  })
}