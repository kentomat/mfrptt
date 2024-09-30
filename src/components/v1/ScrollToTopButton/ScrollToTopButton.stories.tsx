import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { ScrollToTopButton } from './ScrollToTopButton';

const meta = {
  title: 'Component/ScrollToTopButton',
  component: ScrollToTopButton,
  tags: ['autodocs', '!dev'],
} satisfies Meta<typeof ScrollToTopButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    onClick: fn(),
  },
};
