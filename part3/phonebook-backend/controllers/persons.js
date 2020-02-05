const peopleRouter = require("express").Router();
const infoRouter = require("express").Router();
const PERSON = require("../models/person");

peopleRouter.post("/", (request, response, next) => {
  const body = request.body;

  const person = new PERSON({
    name: body.name,
    number: body.number
  });

  person
    .save()
    .then(savedPerson => {
      response.json(savedPerson.toJSON());
    })
    .catch(error => next(error));
});

peopleRouter.get("/", (request, response, next) => {
  PERSON.find({}).then(persons => {
    response.json(persons.map(person => person.toJSON()));
  });
});

peopleRouter.get("/:id", (request, response, next) => {
  PERSON.findById(request.params.id)
    .then(person => {
      response.json(person.toJSON());
    })
    .catch(error => next(error));
});

peopleRouter.delete("/:id", (request, response, next) => {
  PERSON.findByIdAndRemove(request.params.id)
    .then(result => {
      response.status(204).end();
    })
    .catch(error => next(error));
});

infoRouter.get("/info", (req, res) => {
  const currentDate = new Date();
  PERSON.estimatedDocumentCount().then(count => {
    let peoplePerson = count === 1 ? "person" : "people";
    res.setHeader("Content-type", "text/html");
    res
      .send(
        `
    <p>Phonebook has ${count} ${peoplePerson}</p>
    <p>${currentDate}</p>
    `
      )
      .catch(error => next(error));
  });
});

module.exports = { peopleRouter, infoRouter };
