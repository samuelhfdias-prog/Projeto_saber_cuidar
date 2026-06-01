import { Router } from 'express';
import { getAllViolenceTypes, getAllEmergencyContacts } from './educational.controller';

const educationalRouter = Router();
educationalRouter.get('/violence-types', getAllViolenceTypes);
educationalRouter.get('/emergency-contacts', getAllEmergencyContacts);

export { educationalRouter };
