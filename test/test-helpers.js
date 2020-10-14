const jwt = require('jsonwebtoken');

const usersArr = [
    {
        id: 1,
        nickname: 'lucy',
        email: 'lucy@gmail.com',
        password: '$2a$04$E5ZgpymY0/gbQzcuTM66uOBqoDdUC/S3AL3RVHKtf2zcsbt3rEDem'
    },
    {
        id: 2,
        nickname: 'joe',
        email: 'joe@gmail.com',
        password: 'test'
    },
    {
        id: 3,
        nickname: 'laura',
        email: 'laura@gmail.com',
        password: '$2a$04$.8LxtFaIGB3M/qi4Z5rD.u1oOSH0uKZtGLzDpNJNm3nFEOhAMhC62'
    }
]


const recipeArr = [
    {
        id: 'x1234',
        title: 'test 1',
        original_url: "",
        user_id: 1,
        date_created: "2020-10-14T21:36:25.485Z"


    },
    {
        id: 'x1235',
        title: 'test 2',
        original_url: "",
        user_id: 1,
        date_created: "2020-10-14T21:36:25.485Z"


    },
    {
        id: 'x1236',
        title: 'test 3',
        original_url: "",
        user_id: 1,
        date_created: "2020-10-14T21:36:25.485Z"


    },
]

const ingredientsArr = [
    {
        id: 1,
        title: 'test',
        amount_str: '1 cup',
        recipe_id: 'x1234'
    },
    {
        id: 2,
        title: 'test2',
        amount_str: '1 cup',
        recipe_id: 'x1234'
    },
    {
        id: 3,
        title: 'test3',
        amount_str: '1 cup',
        recipe_id: 'x1234'
    }
]


function makeExpectedRecipes(rec) {
    return {
        id: rec.id,
        title: rec.title,
        original_url: rec.original_url,
        created: "2020-10-14T21:36:25.485Z"

    }
}

function makeExpectedIng(ing) {
    return {
        title: ing.title,
        amount_str: ing.amount_str,
        id: ing.id
    }
}


function cleanTables(db) {
    return db.raw(
        `TRUNCATE
       recipe_ingredients,
       user_recipes,
       users
       RESTART IDENTITY CASCADE`
    );
}

function makeAuthHeader(email, secret = process.env.JWT_SECRET) {
    const token = jwt.sign({ user_id: user.id }, secret, {
        subject: email,
        algorithm: 'HS256'
    });
    return `Bearer ${token}`;
}



module.exports = {
    cleanTables,
    makeAuthHeader,
    usersArr,
    recipeArr,
    ingredientsArr,
    makeExpectedIng,
    makeExpectedRecipes
}