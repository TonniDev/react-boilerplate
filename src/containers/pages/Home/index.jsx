import React, {Fragment, Component} from "react";
import PropTypes, {instanceOf} from 'prop-types';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import {Helmet} from "react-helmet";
import { Cookies, withCookies } from "react-cookie";

import {Container, Title, Text} from 'Atoms';
import {firstAction} from "../../../actions/firstActions";


class Home extends Component {
  
  state = {
    loading: true,
    data: {}
  };

  componentDidMount() {
    this.props.firstAction().then(() => this.setState({loading: false}));
  }

  render() {
    return (
      <Container>
        <Helmet>
          <title>Home</title>
        </Helmet>
        <Container>
          {this.state.loading
            ? (
              <p>Carregando...</p>
              )
            : (
              <Fragment>
                <Title>Home início</Title>
                <Text margin={[20, 40]}>Texto da página principal. Hello React!</Text>
                {this.props.firstReducer.todos.map(todo => (
                  <Fragment>
                    <Text margin={[15, 0]}> --> {todo.title}</Text>
                  </Fragment>
                ))}
              </Fragment>
            )}
        </Container>
      </Container>
    );
  }
}

const mapStateToProps = ({
  firstReducer
}) => ({
  firstReducer
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ firstAction }, dispatch);
}

Home.propTypes = {
  cookies: instanceOf(Cookies).isRequired,
  firstAction: PropTypes.func
};

export default withRouter(
   withCookies( connect(
      mapStateToProps,
      mapDispatchToProps
    )(Home))
);
