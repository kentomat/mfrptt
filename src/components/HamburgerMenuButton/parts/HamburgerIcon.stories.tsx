import type { Meta, StoryObj } from '@storybook/react';
import { HamburgerIcon } from './HamburgerIcon';

const meta = {
  title: 'Component/HamburgerMenuButton/Parts/HamburgerIcon',
  component: HamburgerIcon,
  tags: ['autodocs', '!dev'],
  argTypes: {},
} satisfies Meta<typeof HamburgerIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {},
};
