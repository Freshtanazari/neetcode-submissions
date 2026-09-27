class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target: number, position: number[], speed: number[]): number {
        // Create a stack of cars with their positions and speeds
        let stackCars = [];

        // Populate the stack with each car's position and speed
        for (let i = 0; i < position.length; i++) {
            stackCars.push([position[i], speed[i]]);
        }

        // Sort cars by position in descending order
        stackCars.sort((a, b) => b[0] - a[0]);

        // Create a stack to keep track of fleets
        let result = [];

        // Go through each car in order and calculate its arrival time
        for (let i = 0; i < stackCars.length; i++) {
            let arrivalTime =
                (target - stackCars[i][0]) / stackCars[i][1];

            // If the arrival time is less than or equal to the fleet ahead,
            // the car joins that fleet and no new fleet is created
            if (arrivalTime <= result[result.length - 1]) {
                continue;

            // If the arrival time is greater, create a new fleet
            } else {
                result.push(arrivalTime);
            }
        }

        return result.length;
    }
}
