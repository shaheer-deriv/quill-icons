import type { Meta, StoryObj } from '@storybook/react';

import { FlagNetherlandsAntillesIcon } from '../src/react/Flag';

const meta = {
  title: 'Flags/FlagNetherlandsAntillesIcon',
  component: FlagNetherlandsAntillesIcon,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    fill: { control: { type: 'color' } },
    iconSize: {
      control: {
        type: 'radio',
      },
      options: ['sm', 'md', 'lg', 'xl', '2xl'],
      defaultValue: 'md',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof FlagNetherlandsAntillesIcon>;

export default meta;

type Story = StoryObj<typeof FlagNetherlandsAntillesIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
