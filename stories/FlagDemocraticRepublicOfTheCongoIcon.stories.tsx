import type { Meta, StoryObj } from '@storybook/react';

import { FlagDemocraticRepublicOfTheCongoIcon } from '../src/react/Flag';

const meta = {
  title: 'Flags/FlagDemocraticRepublicOfTheCongoIcon',
  component: FlagDemocraticRepublicOfTheCongoIcon,
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
} satisfies Meta<typeof FlagDemocraticRepublicOfTheCongoIcon>;

export default meta;

type Story = StoryObj<typeof FlagDemocraticRepublicOfTheCongoIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
