/**
 * Basic element. A window should have initial position on the screen and size.
 */
export abstract class Window {
    protected constructor(x: number, y: number, w: number, h: number) {
        this.setPosition(x,y);
        this.setSize(w, h);
    }

    /**
     * Should be used only in element initialization.
     * @param x - initial position in x-axis
     * @param y - initial position in y-axis
     * @protected
     */
    protected abstract setPosition(x: number, y: number): void;

    /**
     * Should be used only in element initialization.
     * @param w - initial width of an element
     * @param h - initial height of an element
     * @protected
     */
    protected abstract setSize(w: number, h: number): void;

}









