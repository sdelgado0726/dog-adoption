"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteDog = exports.editDog = exports.editDogPage = exports.addDog = exports.addDogPage = exports.oneDog = exports.allDog = exports.defaultDog = void 0;
const dog_1 = require("../models/dog");
const defaultDog = (req, res, next) => {
    res.redirect('/dogs');
};
exports.defaultDog = defaultDog;
const allDog = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let dogList = yield dog_1.Dog.findAll();
    res.render('all-dog', { dogList });
});
exports.allDog = allDog;
const oneDog = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let itemId = req.params.dogId;
    let dogItem = yield dog_1.Dog.findByPk(itemId);
    if (dogItem) {
        res.render('dog-detail', { foundDog: dogItem });
    }
    else {
        res.status(404).render('error', { message: 'Dog not found' });
    }
});
exports.oneDog = oneDog;
const addDogPage = (req, res, next) => {
    res.render('add-dog');
};
exports.addDogPage = addDogPage;
const addDog = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let newDog = req.body;
    yield dog_1.Dog.create(newDog);
    res.redirect('/dogs');
});
exports.addDog = addDog;
const editDogPage = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let itemId = req.params.dogId;
    let dogItem = yield dog_1.Dog.findOne({
        where: { dogId: itemId }
    });
    if (dogItem) {
        res.render('edit-dog', { foundDog: dogItem });
    }
    else {
        res.status(404).render('error', { message: 'Dog not found' });
    }
});
exports.editDogPage = editDogPage;
const editDog = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let itemId = req.params.dogId;
    let updatedItem = req.body;
    let [updated] = yield dog_1.Dog.update(updatedItem, {
        where: { dogId: itemId }
    });
    if (updated === 1) {
        res.render('dog-detail', { foundDog: updatedItem });
    }
    else {
        res.render('error', { message: 'Dog could not be updated' });
    }
});
exports.editDog = editDog;
const deleteDog = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let itemId = req.params.dogId;
    let deleted = yield dog_1.Dog.destroy({
        where: { dogId: itemId }
    });
    if (deleted) {
        res.redirect('/dogs');
    }
    else {
        res.status(404).render('error', { message: 'Cannot find Dog' });
    }
});
exports.deleteDog = deleteDog;
