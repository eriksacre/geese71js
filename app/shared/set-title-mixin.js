var SetTitleMixin = {
    componentDidMount: function() {
        document.title = this.props.title;
    }
};

module.exports = SetTitleMixin;