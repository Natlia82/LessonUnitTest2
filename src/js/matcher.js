//import { result } from "lodash";

export default function matchers(massObject) {
    let sortByAge = (a, b) => a.health < b.health ? 1 : -1;
    return massObject.sort(sortByAge);
}