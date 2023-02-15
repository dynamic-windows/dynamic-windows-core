/**
 * Element that can change its position.
 */
export interface Movable {
    /**
     * @param x - new position in x-axis
     * @param y - new positioin in y-axis
     */
    move(x: number, y: number): void;
}