import type { Meta, StoryObj } from '@storybook/react';
import { CloseIcon } from './CloseIcon';

const meta = {
  title: 'Component/HamburgerMenuButton/Parts/CloseIcon',
  component: CloseIcon,
  tags: ['autodocs', '!dev'],
  argTypes: {},
} satisfies Meta<typeof CloseIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {},
};
