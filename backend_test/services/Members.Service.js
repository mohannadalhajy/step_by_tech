const createError = require("http-errors");
const models = require("../models");
const {
  Response, ErrorResponse,
} = require("../helpers/Response.Helper");
const SERVER_ERRORS = require("../helpers/ServerErrors.Helper");
const model = models.members
const bcrypt = require("bcryptjs");
const validation = async (record, arrayError) => {
  if (!record) {
    arrayError.push(new ErrorResponse(
      "createMember",
      "Member",
      "member can not be empty.",
      SERVER_ERRORS.RECORD_EMPTY
    ))
    return;
  }
}
module.exports = {
  getAll: async (requestedPage, recordsInPage) => {
    return new Promise((resolve, reject) => {
      (async () => {
        try {
          let count = await model.count()
            .then(counter => { return counter }).catch(error => {
              throw (error)
            })
          let pageCount = Math.ceil(count / recordsInPage);
          const result = await model.findAll({
            limit: recordsInPage,
            offset: (requestedPage - 1) * recordsInPage
          }).then(result => {
            if (result.length) return (new Response(true, { result, pageCount, count }, {}))
            else throw (
              createError.NotFound({
                error: new Response(false, {}, "There is no members"),
                code: SERVER_ERRORS.RECORDS_NOT_FOUND,
              })
            )
          }).catch(error => {
            throw (error)
          })
          resolve(result);
        } catch (error) {
          reject(error)
        }
      })()
    })
  },
  deleteAll: async () => {
    return new Promise((resolve, reject) => {
      (async () => {
        try {
          const result = await model.destroy({ truncate: true }).then(result => {
            return new Response(true, { result, pageCount, count }, {})
          }).catch(error => {
            throw (error)
          })
          resolve(result);
        } catch (error) {
          reject(error)
        }
      })()
    })
  },
  delete: async (id) => {
    return new Promise((resolve, reject) => {
      (async () => {
        try {
          const result = await model.destroy({ where: { id } }).then(result => {
            if (result) return (new Response(true, result, {}))
            else throw (
              createError.NotFound({
                error: new Response(false, {}, "Member not found"),
                code: SERVER_ERRORS.RECORD_NOT_FOUND,
              })
            )
          }).catch(error => {
            throw (error)
          })
          resolve(result);
        } catch (error) {
          reject(error)
        }
      })()
    })
  },
  update: async (id, newRecord) => {
    return new Promise((resolve, reject) => {
      (async () => {
        try {
          const arrayError = []
          await validation(newRecord, arrayError)
          if (arrayError.length) throw (createError.Conflict({
            arrayError,
            code: SERVER_ERRORS.RECORD_IS_NOT_VALID,
          }))
          const result = await model.update(newRecord, { where: { id } }).then(result => {
            if (result[0]) return (new Response(true, newRecord, {}))
            else throw (
              createError.NotFound({
                error: new Response(false, {}, "Member not found"),
                code: SERVER_ERRORS.RECORD_NOT_FOUND,
              })
            )
          }).catch(error => {
            throw (error)
          })
          resolve(result);
        } catch (error) {
          reject(error)
        }
      })()
    })
  },
  add: async (record) => {
    return new Promise((resolve, reject) => {
      (async () => {
        try {
          const arrayError = []
          await validation(record, arrayError)
          if (arrayError.length) throw (createError.Conflict({
            arrayError,
            code: SERVER_ERRORS.RECORD_IS_NOT_VALID,
          }))
          const salt = await bcrypt.genSalt(10)
          const hashPassword = await bcrypt.hash(record.password, salt);
          record.password = hashPassword
          const result = await model.create(record).then(result => {
            return (new Response(true, result, {}))
          }).catch(error => {
            throw (error)
          })
          resolve(result);
        } catch (error) {
          reject(error)
        }
      })()
    })
  },
  findById: async (id) => {
    return new Promise((resolve, reject) => {
      (async () => {
        try {
          const result = await model.findByPk(id).then(result => {
            if (result) return (new Response(true, result, {}))
            else throw (
              createError.NotFound({
                error: new Response(false, {}, "Member not found"),
                code: SERVER_ERRORS.RECORD_NOT_FOUND,
              })
            )
          }).catch(error => {
            throw (error)
          })
          resolve(result);
        } catch (error) {
          reject(error)
        }
      })()
    })
  }
};