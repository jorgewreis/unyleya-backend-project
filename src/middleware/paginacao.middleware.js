module.exports = (req, res, next) => {
    let { limit, offset } = req.query;

    limit = Number(limit);
    offset = Number(offset);

    !offset ? offset = 0 : null;
    !limit ? limit = 10 : null;

    req.query.limit = limit;
    req.query.offset = offset;

    return next();
}