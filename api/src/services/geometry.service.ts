
class GeometryService {

  checkPointInRectangle(point: any, rectangle: any) {

    if (point.pointX >= rectangle.pointRectX1 &&
        point.pointX <= rectangle.pointRectX2 &&
        point.pointY <= rectangle.pointRectY1 &&
        point.pointY >= rectangle.pointRectY2) {
      return true;
    } else {
      return false;
    }
  }
  
  checkPointInCircle(point: any, circle: any) {
    const distance = this._calculateDistance(point.px, point.py, circle.cx, circle.cy);
    return distance <= circle.r;
  }

  _calculateDistance(x1: number, y1: number, x2: number, y2: number) {
      return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
  }
}

export default new GeometryService();
