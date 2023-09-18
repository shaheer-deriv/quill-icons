import type { Meta, StoryObj } from '@storybook/react';

import { PartnersProductSmarttraderWhiteWordmarkIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PartnersProductSmarttraderWhiteWordmarkIcon',
  component: PartnersProductSmarttraderWhiteWordmarkIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PartnersProductSmarttraderWhiteWordmarkIcon>;

export default meta;

type Story = StoryObj<typeof PartnersProductSmarttraderWhiteWordmarkIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
