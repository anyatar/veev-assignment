import { Request, Response } from "express";
import geometryService from "../services/geometry.service";

export default class AviationController {

checkPointInRectangle(req: Request, res: Response) {
    try {
      let { px, py, rectX1, rectX2, rectY1, rectY2 } = req.query;

      if (!px || !py) {
          return res.status(400).json({ error: 'Missing point coordinates' });
      }

      if (!rectX1 || !rectX2 || !rectY1 || !rectY2) {
        return res.status(400).json({ error: 'Missing rectangle coordinates' });
      }

      const pointX = parseFloat(px.toString());
      const pointY = parseFloat(py.toString());
      const pointRectX1 = parseFloat(rectX1.toString());
      const pointRectX2 = parseFloat(rectX2.toString());
      const pointRectY1 = parseFloat(rectY1.toString());
      const pointRectY2 = parseFloat(rectY2.toString());

      const result = geometryService.checkPointInRectangle({pointX, pointY}, {pointRectX1, pointRectX2, pointRectY1, pointRectY2});
      res.status(201).json({result});
    } catch (error) {
      res.status(500).send({
        message: `Some error occurred in checkPointInRectangle: ${error}`,
      });
    }
  }

  checkPointInCircle(req: Request, res: Response) {

    try {
      const { px, py, cx, cy, cr } = req.query;

      if (!px || !py) {
          return res.status(400).json({ error: 'Missing point coordinates' });
      }

      if (!cx || !cy || !cr) {
        return res.status(400).json({ error: 'Missing circle coordinates' });
      }

      const pointX = parseFloat(px.toString());
      const pointY = parseFloat(py.toString());
      const circleX = parseFloat(cx.toString());
      const circleY = parseFloat(cy.toString());
      const circleR = parseFloat(cr.toString());

      const result = geometryService.checkPointInCircle({px: pointX, py: pointY}, {cx: circleX, cy: circleY, r: circleR});
      res.status(201).json({result});
    } catch (err) {
      res.status(500).send({
        message: `Some error occurred in checkPointInCircle: ${err}`,
      });
    }
   
  }
  
 
}
