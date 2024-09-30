import type { Meta, StoryObj } from '@storybook/react';
import { ErrorText } from './ErrorText';

const meta = {
  title: 'Component/ErrorText',
  component: ErrorText,
  tags: ['autodocs', '!dev'],
} satisfies Meta<typeof ErrorText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    children: '＊エラーテキスト',
  },
};
