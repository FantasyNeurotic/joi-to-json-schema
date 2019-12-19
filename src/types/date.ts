export const date = (schema, joi) => {
    if (joi._flags.timestamp) {
        schema.type = 'integer'
        return schema
    }

    schema.type = 'string'
    schema.format = 'date-time'
    return schema
}