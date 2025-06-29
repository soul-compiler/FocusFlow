import { Request } from 'express';

export type requestType = Request & { user: { sub: string; email: string } };
