export default {
    name: 'timeMixin',
    methods: {
        moment(date) {
            return moment(date).startOf('months').fromNow();;
        }
    }
}