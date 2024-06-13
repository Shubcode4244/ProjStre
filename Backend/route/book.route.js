import express from 'express';
import {getCourse} from '../controller/Course.controller.js';

const rourter = express.Router();

rourter.get('/',getCourse);

export default rourter;