import type { Meta, StoryObj } from '@storybook/react';
import { SupportText } from './SupportText';

const meta = {
  title: 'Component/SupportText',
  component: SupportText,
  tags: ['autodocs', '!dev'],
} satisfies Meta<typeof SupportText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    children: 'サポートテキスト',
  },
};
