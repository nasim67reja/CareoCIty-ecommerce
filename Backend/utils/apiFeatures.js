class APIFeatures {
  // eslint-disable-next-line no-shadow
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }

  filter() {
    // eslint-disable-next-line no-unused-vars
    const { page, sort, limit, fields, ...queryObj } = this.queryString;
    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);
    this.query.find(JSON.parse(queryStr));
    return this;
  }

  sort() {
    if (this.queryString.sort) {
      const sortBy = this.queryString.sort.split(',').join(' ');
      this.query.sort(sortBy);
    } else this.query.sort('ratingsAverage');
    return this;
  }

  limitFields() {
    if (this.queryString.fields) {
      const Fields = this.queryString.fields.split(',').join(' ');
      this.query.select(Fields);
    } else this.query.select('-__v');
    return this;
  }

  paginate() {
    const Page = this.queryString.page * 1 || 1;
    const Limit = this.queryString.limit * 1 || 100;
    const skip = Limit * (Page - 1);
    this.query.skip(skip).limit(Limit);

    return this;
  }
}

module.exports = APIFeatures;
