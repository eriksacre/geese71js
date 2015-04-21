var ProjectAPI = {
    fetchAll: function() {
        // This would be a JSON API call
        return [
            {id: 1, name: 'Geese71', favourite: false},
            {id: 2, name: 'Personal to do', favourite: true},
            {id: 3, name: 'One-to-one', favourite: false}
        ];
    }
};

module.exports = ProjectAPI;