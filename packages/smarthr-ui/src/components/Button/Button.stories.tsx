import { action } from '@storybook/addon-actions'
import { StoryFn } from '@storybook/react'
import React, { useState } from 'react'
import styled, { css } from 'styled-components'

import { FaPlusCircleIcon, FaPlusIcon, FaPlusSquareIcon } from '../Icon'
import { Cluster, Stack } from '../Layout'

import { Button, UnstyledButton } from '.'

export default {
  title: 'Buttons（ボタン）/Button',
  component: Button,
  tags: ['!autodocs']
}

type ButtonProps = React.ComponentProps<typeof Button>

export const _Button: StoryFn = () => (
  <List>
    <dt>Default</dt>
    <dd>
      <Stack>
        <Cluster>
          <Button variant="primary" onClick={action('clicked')}>
            ボタン
          </Button>
          <Button variant="primary" prefix={<FaPlusIcon />} onClick={action('clicked')}>
            ボタン
          </Button>
          <Button variant="primary" suffix={<FaPlusSquareIcon />} onClick={action('clicked')}>
            ボタン
          </Button>
          <Button variant="primary" square onClick={action('clicked')}>
            <FaPlusCircleIcon alt="プラスボタン" />
          </Button>
        </Cluster>
        <Cluster>
          <Button variant="primary" disabled onClick={action('clicked')}>
            ボタン
          </Button>
          <Button variant="primary" disabled prefix={<FaPlusIcon />} onClick={action('clicked')}>
            ボタン
          </Button>
          <Button
            variant="primary"
            disabled
            suffix={<FaPlusSquareIcon />}
            onClick={action('clicked')}
          >
            ボタン
          </Button>
          <Button variant="primary" disabled square onClick={action('clicked')}>
            <FaPlusCircleIcon alt="プラスボタン" />
          </Button>
        </Cluster>
        <Cluster>
          <Button variant="primary" loading onClick={action('clicked')}>
            ボタン
          </Button>
          <Button variant="primary" loading prefix={<FaPlusIcon />} onClick={action('clicked')}>
            ボタン
          </Button>
          <Button
            variant="primary"
            loading
            suffix={<FaPlusSquareIcon />}
            onClick={action('clicked')}
          >
            ボタン
          </Button>
          <Button variant="primary" loading square onClick={action('clicked')}>
            <FaPlusCircleIcon alt="プラスボタン" />
          </Button>
        </Cluster>
      </Stack>
    </dd>

    <dt>Variants</dt>
    <dd>
      <Stack>
        <Cluster>
          <Button variant="primary" onClick={action('clicked')}>
            ボタン
          </Button>
          <Button variant="primary" disabled onClick={action('clicked')}>
            ボタン
          </Button>
        </Cluster>
        <Cluster>
          <Button variant="secondary" onClick={action('clicked')}>
            ボタン
          </Button>
          <Button variant="secondary" disabled onClick={action('clicked')}>
            ボタン
          </Button>
        </Cluster>
        <Cluster>
          <Button variant="danger" onClick={action('clicked')}>
            ボタン
          </Button>
          <Button variant="danger" disabled onClick={action('clicked')}>
            ボタン
          </Button>
        </Cluster>
        <DarkBackground>
          <Cluster>
            <Button variant="skeleton" onClick={action('clicked')}>
              ボタン
            </Button>
            <Button variant="skeleton" disabled onClick={action('clicked')}>
              ボタン
            </Button>
          </Cluster>
        </DarkBackground>
        <Cluster>
          <Button variant="text" onClick={action('clicked')}>
            ボタン
          </Button>
          <Button variant="text" disabled onClick={action('clicked')}>
            ボタン
          </Button>
        </Cluster>
      </Stack>
    </dd>

    <dt>Small</dt>
    <dd>
      <Stack>
        <Cluster>
          <Button variant="primary" size="s" onClick={action('clicked')}>
            ボタン
          </Button>
          <Button variant="primary" size="s" prefix={<FaPlusIcon />} onClick={action('clicked')}>
            ボタン
          </Button>
          <Button
            variant="primary"
            size="s"
            suffix={<FaPlusSquareIcon />}
            onClick={action('clicked')}
          >
            ボタン
          </Button>
          <Button variant="primary" size="s" square onClick={action('clicked')}>
            <FaPlusCircleIcon alt="プラスボタン" />
          </Button>
        </Cluster>
        <Cluster>
          <Button variant="primary" size="s" disabled onClick={action('clicked')}>
            ボタン
          </Button>
          <Button
            variant="primary"
            size="s"
            disabled
            prefix={<FaPlusIcon />}
            onClick={action('clicked')}
          >
            ボタン
          </Button>
          <Button
            variant="primary"
            size="s"
            disabled
            suffix={<FaPlusSquareIcon />}
            onClick={action('clicked')}
          >
            ボタン
          </Button>
          <Button variant="primary" size="s" disabled square onClick={action('clicked')}>
            <FaPlusCircleIcon alt="プラスボタン" />
          </Button>
        </Cluster>
        <Cluster>
          <Button variant="primary" size="s" loading onClick={action('clicked')}>
            ボタン
          </Button>
          <Button
            variant="primary"
            size="s"
            loading
            prefix={<FaPlusIcon />}
            onClick={action('clicked')}
          >
            ボタン
          </Button>
          <Button
            variant="primary"
            size="s"
            loading
            suffix={<FaPlusSquareIcon />}
            onClick={action('clicked')}
          >
            ボタン
          </Button>
          <Button variant="primary" size="s" loading square onClick={action('clicked')}>
            <FaPlusCircleIcon alt="プラスボタン" />
          </Button>
        </Cluster>
      </Stack>
    </dd>

    <dt>Wide</dt>
    <dd>
      <Stack>
        <Button variant="primary" wide onClick={action('clicked')}>
          ボタン
        </Button>
        <Button variant="primary" disabled wide onClick={action('clicked')}>
          ボタン
        </Button>
      </Stack>
    </dd>

    <dt>disabled な理由</dt>
    <dd>
      <Button disabled disabledDetail={{ message: 'どうしても disabled にする理由を書きます。' }}>
        ボタン
      </Button>
    </dd>

    <dt>Extending Style</dt>
    <dd>
      <ExtendingButton variant="primary" onClick={action('clicked')}>
        width: 300px
      </ExtendingButton>
    </dd>

    <dt>Unstyled</dt>
    <dd>
      <UnstyledButton onClick={action('clicked')}>ボタン</UnstyledButton>
    </dd>
  </List>
)

_Button.parameters = {
  controls: { hideNoControlsWarning: true },
}

export const _ButtonControl: StoryFn = (args: ButtonProps) => (
  <Wrapper>
    <Button {...args} onClick={action('clicked')}>
      {args.children}
    </Button>
  </Wrapper>
)
_ButtonControl.args = {
  children: 'ボタン',
}

export const WithLoading: StoryFn = (args: ButtonProps) => {
  const [loading, setLoading] = useState(false)
  const handleClick = () => {
    setLoading(true)
    setTimeout(() => setLoading(false), 1000)
  }

  return (
    <Button {...args} prefix={<FaPlusCircleIcon />} loading={loading} onClick={handleClick}>
      読み込み
    </Button>
  )
}

const Wrapper = styled.div`
  padding: 24px;
`
const List = styled.dl`
  margin: 0;
  padding: 1rem;
  dt {
    margin: 0 0 1rem;
  }
  dd {
    margin: 0 0 1rem;
  }
`
const DarkBackground = styled.div`
  padding: 1rem;
  background-color: #5c5c5c;
  color: #fff;
`

const extendingStyle = css`
  width: 300px;
`
const ExtendingButton = styled(Button)`
  ${extendingStyle}
`
