import type { Meta, StoryObj } from '@storybook/react';
import { LanguageSelectorGlobeWithLabelIcon } from './GlobeWithLabelIcon';

const meta = {
  title: 'Component/LanguageSelector/Parts/GlobeWithLabelIcon',
  component: LanguageSelectorGlobeWithLabelIcon,
  tags: ['autodocs', '!dev'],
} satisfies Meta<typeof LanguageSelectorGlobeWithLabelIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    'aria-label': 'Language',
  },
};
