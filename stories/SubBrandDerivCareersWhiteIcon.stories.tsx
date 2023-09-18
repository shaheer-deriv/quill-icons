import type { Meta, StoryObj } from '@storybook/react';

import { SubBrandDerivCareersWhiteIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/SubBrandDerivCareersWhiteIcon',
  component: SubBrandDerivCareersWhiteIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SubBrandDerivCareersWhiteIcon>;

export default meta;

type Story = StoryObj<typeof SubBrandDerivCareersWhiteIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
