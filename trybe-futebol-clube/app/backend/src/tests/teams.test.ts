import * as chai from 'chai';
import * as sinon from 'sinon';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Teams from '../database/models/teams';
import { MteamById, Mteams } from './mocks/teams.mock';

chai.use(chaiHttp);

const { expect } = chai;

describe('Testing the /teams endpoint', () => {
  beforeEach(sinon.restore);

  it('check if it returns all teams', async () => {
    sinon.stub(Teams, 'findAll').resolves(Mteams as Teams[]);

    const response = await chai.request(app).get('/teams');

    expect(response.status).to.be.equal(200);
    expect(response.body).to.be.deep.equal(Mteams as Teams[]);
  });
});

describe('Testing the /teams/:id endpoint', () => {
  beforeEach(sinon.restore);

  it('check if it returns teams by id', async () => {
    sinon.stub(Teams, 'findOne').resolves(MteamById as Teams);

    const response = await chai.request(app).get('/teams/16');

    expect(response.status).to.be.equal(200);
    expect(response.body).to.be.deep.equal(MteamById as Teams);
  });

  it('checks if it returns the correct error when passing an invalid user', async () => {
    sinon.stub(Teams, 'findOne').resolves(null);

    const response = await chai.request(app).get('/teams/17');

    expect(response.status).to.be.equal(400);
    expect(response.body).to.be.deep.equal({ message: 'Team not found' });
  });
});