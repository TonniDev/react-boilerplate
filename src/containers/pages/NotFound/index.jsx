import React, { PureComponent as Component, Fragment } from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import {
  Title, Text, Button, Container
} from 'Atoms';
import { Helmet } from 'react-helmet';
import { css } from 'styled-components';

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.tryAgain = this.tryAgain.bind(this);
  }

  tryAgain() {
    this.props.history.push('/');
  }

  render() {
    console.log('@aplic', this.props.location.state); // eslint-disable-line
    return (
      <Fragment>
        <Helmet>
          <title>Página não encontrada</title>
        </Helmet>

        <Container justify="space-between"
          height="80vh"
          breakpoints={{
            tablet: css`
              height: auto;
            `
          }}
        >
          <Container>
            <Title
              as="h3"
              fontFamily="sans-serif"
              fontWeight="Medium"
              fontSize={62}
            >
              Página não encontrada
            </Title>
          </Container>


          <Container margin={[24, 0, 0, 0]}>
            <Text>
              A página que você está tentando acessar não está disponível.
              <br />
              Verifique o endereço digitado e tente novamente.
            </Text>
          </Container>


          <Container direction="row" alignself="flex-start" margin={[70, 0, 0, 0]}
            breakpoints={{
              tablet: css`
                width:280px;
              `
            }}
          >
            <Button ghost onClick={this.tryAgain}>
              Tentar novamente
            </Button>
          </Container>
        </Container>
      </Fragment>
    );
  }
}
Index.propTypes = {
  history: PropTypes.object.isRequired
};


export default withRouter(Index);
