import type { Meta, StoryObj } from '@storybook/react';

import { FlagCanadaIcon } from '../src/react/flags';

const meta = {
  title: 'flags/FlagCanadaIcon',
  component: FlagCanadaIcon,
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
} satisfies Meta<typeof FlagCanadaIcon>;

export default meta;

type Story = StoryObj<typeof FlagCanadaIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
