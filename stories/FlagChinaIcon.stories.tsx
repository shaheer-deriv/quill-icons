import type { Meta, StoryObj } from '@storybook/react';

import { FlagChinaIcon } from '../src/react/Flag';

const meta = {
  title: 'Flags/FlagChinaIcon',
  component: FlagChinaIcon,
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
} satisfies Meta<typeof FlagChinaIcon>;

export default meta;

type Story = StoryObj<typeof FlagChinaIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
